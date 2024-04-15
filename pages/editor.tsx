import { NextPage } from 'next'
import Head from 'next/head';
import Tiptap from '../components/Tiptap'


const Editor: NextPage = () => {
    
        return (
                <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
                    <Head>
                        <title>Doc Editor</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    {/* <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
                    Document
                    </h1> */}
                    <div className="max-w-5xl w-full">
                        <div className="border border-gray-200 rounded-md p-4 flex mt-10 items-center space-x-3">
                        <Tiptap />
                        </div>
                    </div>
                    
                </div>
        )
}
export default Editor;
