import { Dispatch, SetStateAction } from 'react'
import { LuX } from 'react-icons/lu'

import Button from './Button'

type ModalProps = {
  showAlertModal: boolean
  setShowAlertModal: Dispatch<SetStateAction<boolean>>
  text?: string
}

export default function AlertModal({
  showAlertModal,
  setShowAlertModal,
  text
}: ModalProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full min-h-screen ${
        showAlertModal ? 'flex' : 'hidden'
      } justify-center items-center bg-900/60 z-[120]`}
    >
      <div className="min-w-[80%] lg:min-w-[30%] p-8 flex flex-col gap-10 bg-800 rounded shadow-xl shadow-black/25">
        <div className="flex items-center gap-4 lg:gap-7">
          <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
            Alerta!
          </h3>
          <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-800 rounded-full" />
          <LuX
            onClick={() => setShowAlertModal(!showAlertModal)}
            className="text-xl lg:text-2xl text-white cursor-pointer"
          />
        </div>

        <p className="text-white">{text}</p>

        <div className="flex gap-4">
          <Button
            onClick={() => setShowAlertModal(!showAlertModal)}
            fill="error"
            className="w-full"
          >
            Cancelar
          </Button>

          <Button className="w-full">Confirmar</Button>
        </div>
      </div>
    </div>
  )
}
