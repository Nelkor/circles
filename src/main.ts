import '@/main.scss'

import { loadImages } from '@/modules/images'
import { startDrawing } from '@/modules/renderer'

loadImages().then(startDrawing)
