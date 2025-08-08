'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { Button } from '@/components/ui/button'
import { X, MapPin } from 'lucide-react'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navigation: Array<{ name: string; href: string }>
}

export function MobileNav({ isOpen, onClose, navigation }: MobileNavProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex items-center justify-between px-4 py-6 sm:px-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-bold text-gray-900">LocalServiceHub</span>
                      </div>
                      <Button variant="ghost" size="sm" onClick={onClose}>
                        <X className="h-6 w-6" />
                      </Button>
                    </div>
                    
                    <div className="relative flex-1 px-4 sm:px-6">
                      <nav className="space-y-1">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                            onClick={onClose}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </nav>
                      
                      <div className="mt-8 pt-8 border-t border-gray-200">
                        <Link href="/list-your-business" onClick={onClose}>
                          <Button className="w-full">List Your Business</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
