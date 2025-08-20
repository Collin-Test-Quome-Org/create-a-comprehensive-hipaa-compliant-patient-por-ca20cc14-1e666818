import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MaintenanceNotice() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <Alert className="max-w-md w-full">
        <div className="flex items-center gap-3">
          <Wrench className="text-primary w-8 h-8" />
          <div>
            <AlertTitle className="text-xl font-bold">We&apos;ll Be Back Soon!</AlertTitle>
            <AlertDescription className="mt-2 text-base">
              Our HIPAA Secure Patient Portal is undergoing scheduled maintenance to keep your information safe and secure.<br />
              Thank you for your patience.
            </AlertDescription>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button asChild variant="outline" id="maintenance-contact-btn">
            <a href="mailto:support@hipaasecureportal.com">Contact Support</a>
          </Button>
        </div>
      </Alert>
    </div>
  )
}
