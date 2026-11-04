import {NextResponse} from 'next/server';
import {validateContact,type ContactFields} from '@/lib/contact';
export async function POST(request:Request){
 const origin=request.headers.get('origin');if(origin&&origin!==new URL(request.url).origin)return NextResponse.json({error:'Request not allowed.'},{status:403});
 if(Number(request.headers.get('content-length')||0)>20000)return NextResponse.json({error:'Message too large.'},{status:413});
 let raw:unknown;try{const body=await request.text();if(body.length>20000)return NextResponse.json({error:'Message too large.'},{status:413});raw=JSON.parse(body)}catch{return NextResponse.json({error:'Invalid request.'},{status:400})}
 if(!raw||typeof raw!=='object')return NextResponse.json({error:'Invalid request.'},{status:400});
 const value=raw as Record<string,unknown>;if(['name','email','message'].some(k=>typeof value[k]!=='string'))return NextResponse.json({error:'Please complete all fields.'},{status:400});
 const data:ContactFields={name:String(value.name),email:String(value.email),message:String(value.message),website:typeof value.website==='string'?value.website:''};
 if(data.website)return NextResponse.json({ok:true});
 const errors=validateContact(data);if(Object.keys(errors).length)return NextResponse.json({error:Object.values(errors)[0],errors},{status:400});
 const {RESEND_API_KEY,CONTACT_FROM,CONTACT_TO}=process.env;if(!RESEND_API_KEY||!CONTACT_FROM||!CONTACT_TO)return NextResponse.json({error:'Email delivery is not configured yet. Please use the email link to get in touch.'},{status:503});
 try{const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({from:CONTACT_FROM,to:[CONTACT_TO],reply_to:data.email,subject:'New portfolio inquiry',text:`From: ${data.name}\nEmail: ${data.email}\n\n${data.message}`}),signal:AbortSignal.timeout(10000)});if(!response.ok)throw new Error('Delivery failed');return NextResponse.json({ok:true})}catch{return NextResponse.json({error:'Your message could not be sent. Please try again or use the email link.'},{status:502})}
}
