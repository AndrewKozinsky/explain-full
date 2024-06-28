const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const { Model, Recognizer } = require('vosk')
const wav = require('wav')
const ffmpegPath = require('ffmpeg-static')

// Укажите путь к модели Vosk
// const MODEL_PATH = __dirname + "/model/vosk-model-en-us-0.42-gigaspeech";
const MODEL_PATH = __dirname + '/model/vosk-model-small-en-us-0.15'

// Убедитесь, что модель Vosk загружена
if (!fs.existsSync(MODEL_PATH)) {
	console.error(
		'Please download the model from https://alphacephei.com/vosk/models and unpack as \'model\' in the current folder.',
	)
	process.exit(1)
}

const model = new Model(MODEL_PATH)

function transcribeAudio(audioFile) {
	return new Promise((resolve, reject) => {
		// Преобразование аудиофайла в WAV формат
		const wavPath = 'temp_audio.wav'
		ffmpeg(audioFile)
			.setFfmpegPath(ffmpegPath)
			.audioChannels(1)
			.toFormat('wav')
			.save(wavPath)
			.on('end', () => {
				const results = []
				const wfReader = new wav.Reader()

				wfReader.on('format', ({ audioFormat, sampleRate, channels }) => {
					const rec = new Recognizer({ model, sampleRate })
					rec.setWords(true)

					wfReader.on('data', (data) => {
						if (rec.acceptWaveform(data)) {
							results.push(JSON.parse(rec.resultString()))
						} else {
							// console.log(rec.partialResult());
						}
					})

					wfReader.on('end', () => {
						results.push(JSON.parse(rec.resultString()))
						resolve(results)
						fs.unlinkSync(wavPath) // Удаляем временный WAV файл
					})
				})

				fs.createReadStream(wavPath).pipe(wfReader)
			})
			.on('error', reject)
	})
}

function printTranscription(results) {
	results.forEach((result) => {
		if (result.result) {
			console.log(result.result)
		}
	})
}

// Пример использования
const audioFile = 'audios/audio.mp3'
transcribeAudio(audioFile).then(printTranscription).catch(console.error)

const data = {}
