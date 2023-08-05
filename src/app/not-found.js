import { Button } from '@/components/ui/button';
import Link from 'next/link';



const NotFoundPage = () => {
    return (
        <div className='flex flex-col justify-center items-center p-20 gap-4'>
            <h1 className='font-bold text-3xl'>404</h1>
            <p>Page Not Found</p>
            <Button asChild>
                <Link href='/'>Back to Home</Link>
            </Button>
            
        </div>
    );
};

export default NotFoundPage;