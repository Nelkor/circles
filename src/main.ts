import '@/main.scss'

import { loadImages } from '@/modules/images'
import { startDrawing } from '@/modules/renderer'
import { startListening } from '@/modules/control'

startListening()
loadImages().then(startDrawing)
