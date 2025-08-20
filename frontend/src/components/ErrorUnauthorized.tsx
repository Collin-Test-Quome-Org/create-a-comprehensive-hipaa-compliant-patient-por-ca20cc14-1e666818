import { Button } from '@/components/ui/button'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { ShieldOff } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ErrorUnauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <Alert variant="destructive" className="max-w-md w-full">
        <div className="flex items-center gap-3">
          <ShieldOff className="text-red-600 w-8 h-8" />
          <div>
            <AlertTitle className="text-xl font-bold">Unauthorized Access</AlertTitle>
            <AlertDescription className="mt-2 text-base">
              Oops! You don&apos;t have permission to view this page.<br />
              Please log in with the appropriate credentials.
            </AlertDescription>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button asChild id="unauthorized-login-btn">
            <Link to="/login">Go to Login</Link>
          </Button>
        </div>
      </Alert>
    </div>
  )
}
