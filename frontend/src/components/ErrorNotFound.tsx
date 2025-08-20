import { Button } from '@/components/ui/button'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { SearchX } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ErrorNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <Alert className="max-w-md w-full">
        <div className="flex items-center gap-3">
          <SearchX className="text-primary w-8 h-8" />
          <div>
            <AlertTitle className="text-xl font-bold">Page Not Found</AlertTitle>
            <AlertDescription className="mt-2 text-base">
              Sorry, the page you requested does not exist or has been moved.<br />
              Let&apos;s get you back to safety!
            </AlertDescription>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button asChild id="notfound-home-btn">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </Alert>
    </div>
  )
}
