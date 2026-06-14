import { MdCalendarToday } from 'react-icons/md'
import Modal from './ui/Modal'

interface ResumeRequestModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeRequestModal({ isOpen, onClose }: ResumeRequestModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Contact Me/Resume Request" wide>
      <div className="space-y-6 text-left">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-cyan font-semibold">
            Resume request details
          </p>
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white">
            Send the details and I’ll share the latest resume.
          </h3>
        </div>

        {/* Availability notice */}
        <div className="flex items-start gap-3 rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 px-5 py-4">
          <MdCalendarToday size={18} className="text-brand-cyan shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="font-semibold text-brand-cyan">Availability note —</span>{' '}
            My last working day is <span className="font-semibold text-white">10 July 2026</span>. I plan to travel in early July and need time for onboarding formalities. I am looking for opportunities where the recruitment process — including interviews and the official offer letter — can be <span className="font-semibold text-white">fully completed within June 2026</span>.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-brand-blue/10">
            <p className="text-gray-200 text-sm leading-relaxed">
              Thank you for your interest in my profile.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
             To ensure I can provide you with the most relevant and up-to-date information, I kindly request that you share some details over the email about the opportunity you're considering me for, from your official email address, including the detailed job description, budget for the role. This will help me tailor my resume to better align with the specific requirements of the role.
            </p>
            <p className="mt-4 text-gray-200 text-sm leading-relaxed">
              Once I receive these details, I will promptly send the updated resume on the same email thread.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-xl shadow-brand-cyan/10">
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-900/90 p-4 border border-white/10">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 mb-2">Email</p>
                <p className="font-medium text-white">gargprasoon98@gmail.com</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-4 border border-white/10">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 mb-2">What to include</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Job Description, Budget, and Contact Number.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-4 border border-white/10">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 mb-2">Why this helps</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  This lets me tailor the resume quickly and respond at the earliest.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-gray-200 hover:bg-slate-800 transition-colors duration-200"
          >
            Close
          </button>
          <a
            href="mailto:gargprasoon98@gmail.com?subject=Resume%20Request&body=Hi%20Prasoon%2C%0A%0AI'm%20interested%20in%20your%20resume.%20Please%20share%20the%20latest%20version%20after%20I%20send%20the%20role%20details.%0A%0AJob%20Description%3A%0A%0ABudget%3A%0A%0AContact%20Number%3A"
            className="inline-flex items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-medium text-white hover:bg-blue-500 transition-colors duration-200"
          >
            Email Request
          </a>
        </div>
      </div>
    </Modal>
  )
}
