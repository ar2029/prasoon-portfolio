import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { MdClose, MdCalendarToday, MdWarning } from 'react-icons/md'

const LAST_WORKING_DAY = new Date('2026-07-10T23:59:59')

export default function AvailabilityPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (new Date() > LAST_WORKING_DAY) return
    const t = setTimeout(() => setOpen(true), 800)
    return () => clearTimeout(t)
  }, [])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Top accent bar */}
        <div className="h-2 w-full bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300" />

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <MdClose size={18} className="text-gray-600" />
        </button>

        <div className="px-7 py-6 space-y-5">
          {/* Header */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <MdWarning size={22} className="text-amber-500" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-1">
                Important Notice
              </p>
              <h2 className="text-xl font-bold text-gray-900 leading-snug">
                Recruitment Timeline & Availability
              </h2>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100" />

          {/* Body */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-2xl bg-red-50 border border-red-100 px-4 py-3">
              <MdCalendarToday size={16} className="text-red-500 shrink-0" />
              <p className="text-sm text-gray-800">
                My <span className="font-semibold text-red-600">last working day</span> is{' '}
                <span className="font-bold text-red-600">10 July 2026</span>.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 border border-amber-100 px-4 py-3">
              <p className="text-sm text-gray-800 leading-relaxed">
                I plan to travel in early July and need time for onboarding formalities.
                I am looking for opportunities where the{' '}
                <span className="font-semibold text-amber-700">
                  full recruitment process — interviews + official offer letter
                </span>{' '}
                — can be completed{' '}
                <span className="font-bold text-amber-700">within June 2026</span>.
              </p>
            </div>

            <div className="rounded-2xl bg-yellow-50 border border-yellow-100 px-4 py-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold text-yellow-700">Available to join</span> from{' '}
                <span className="font-bold text-yellow-700">13 July 2026</span> onwards.
              </p>
            </div>
          </div>

          {/* Footer */}
          <button
            onClick={() => setOpen(false)}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 text-white font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-150 shadow-md shadow-amber-200"
          >
            Understood, let's connect!
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
