console.log("Hello, World!");
import Anthropic from '@anthropic-ai/sdk';
import { AnthropicStream, StreamingTextResponse } from 'ai';
 
if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('Missing env var from Anthropic');
  }
  

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

// Create an Anthropic API client (that's edge friendly)
const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY || '',
  });

 
//   export async function POST(req: Request) {
//     // Extract the `prompt` from the body of the request
//     const { prompt } = await req.json();
   
//     // Ask Claude for a streaming chat completion given the prompt
//     const response = await anthropic.messages.create({
//     messages: [{ role: 'user', content: prompt }],
//       model: 'claude-2.1',
//       stream: true,
//       max_tokens: 300,
//     });
   
//     // Convert the response into a friendly text-stream
//     const stream = AnthropicStream(response);
   
//     // Respond with the stream
//     return new StreamingTextResponse(stream);
//   }


const handler = async (req: Request): Promise<Response> => {
    const { prompt } = (await req.json()) as {
      prompt?: string;
    };
  
    if (!prompt) {
      return new Response('No prompt in the request', { status: 400 });
    }
    const response = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        messages: [
          {"role": "user", "content": prompt}
        ],
        stream: true
      });
    
    const stream = AnthropicStream(response);
  
    return new Response(stream as ReadableStream, {
      headers: new Headers({
        'Cache-Control': 'no-cache',
      }),
    });
  };
  
  export default handler;

  
  