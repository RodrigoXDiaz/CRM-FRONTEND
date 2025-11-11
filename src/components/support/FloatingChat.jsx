import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ChatBubbleLeftEllipsisIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FloatingChat(){
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const quickActions = [
    { label: 'Crear Usuario', to: '/users' },
    { label: 'Ver Reportes', to: '/reports' },
    { label: 'Ir al Dashboard', to: '/' },
    { label: 'Soporte técnico', to: '/settings' }
  ];

  return (
    <>
      <button
        title="Soporte"
        onClick={() => setOpen(true)}
        className="floating-chat-btn fixed right-6 bottom-6 bg-corporate-900 text-white flex items-center justify-center z-50"
        aria-label="Abrir chat de soporte"
      >
        <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
      </button>

      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden />
          </Transition.Child>

          <div className="fixed right-6 bottom-24 w-96">
            <Transition.Child
              as={Fragment}
              enter="transform transition duration-200"
              enterFrom="translate-y-6 opacity-0"
              enterTo="translate-y-0 opacity-100"
              leave="transform transition duration-150"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="translate-y-6 opacity-0"
            >
              <Dialog.Panel className="bg-white rounded-md shadow-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-corporate-900 text-white flex items-center justify-center">SS</div>
                    <div>
                      <div className="font-medium">Soporte</div>
                      <div className="text-xs text-neutral-500">¿En qué puedo ayudarte?</div>
                    </div>
                  </div>
                  <button onClick={() => setOpen(false)} className="p-1 rounded-md hover:bg-gray-50">
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-4 space-y-3 max-h-64 overflow-auto">
                  <div className="text-sm text-neutral-600">Hola 👋 Soy el asistente visual. Escribe lo que deseas o usa las acciones rápidas.</div>

                  {/* Simulated recent messages */}
                  <div className="space-y-2">
                    <div className="bg-gray-50 p-2 rounded-md text-sm text-neutral-700">Quiero crear un usuario nuevo</div>
                    <div className="bg-corporate-900 text-white p-2 rounded-md text-sm self-end">Te puedo ayudar con eso. Usa el botón abajo.</div>
                  </div>

                  <div>
                    <div className="text-xs text-neutral-500 mb-2">Acciones rápidas</div>
                    <div className="flex flex-wrap gap-2">
                      {quickActions.map((a) => (
                        <button
                          key={a.label}
                          onClick={() => { setOpen(false); navigate(a.to); }}
                          className="px-3 py-1.5 rounded-md border text-sm hover:bg-gray-50"
                        >
                          {a.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3 border-t">
                  <div className="flex gap-2">
                    <input
                      placeholder="Escribe tu mensaje..."
                      className="flex-1 px-3 py-2 rounded-md border focus:outline-none"
                    />
                    <button className="px-3 py-2 rounded-md bg-corporate-900 text-white">Enviar</button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
