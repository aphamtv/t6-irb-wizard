import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
      <div>
        Powered by{' '}
        <a
          // href="https://mistral.ai/news/mixtral-of-experts"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2"
        >
          Claude{' '}
        </a>
        and{' '}
        <a
          // href="https://platform.openai.com/docs/models"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2"
        >
          GPT-3.5
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <a href="https://www.talosix.com/" className="group" aria-label="Talosix" target="_blank" rel="noopener noreferrer">
        <img src="/t6_logo.svg" alt="Talosix Logo" className="h-10 w-10" aria-hidden="true"/>
       </a>
      </div>

</div>


    </footer>
  );
}
