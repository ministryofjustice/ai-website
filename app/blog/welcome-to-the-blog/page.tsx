"use client"

import Link from "next/link"

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white pt-12 pb-24">
      <div className="w-full max-w-[900px] px-4">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            &larr; Back to blog
          </Link>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500 mb-8">10 June 2025</div>
          <h1 className="mx-auto mb-14 max-w-[854px] text-[3.5rem] font-semibold leading-tight tracking-tight">
            Welcome to the Justice AI Unit blog
          </h1>
          <div className="mb-8">
            <div className="text-lg text-black">Dan James</div>
            <div className="text-sm text-gray-600">Director of the Justice AI Unit</div>
          </div>
        </div>
        <div className="mx-auto max-w-[641px] text-gray-800" style={{textAlign: 'left'}}>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            Welcome to the first blog post from the Justice AI Unit, a new team in the Ministry of Justice created to lead the safe and effective adoption of artificial intelligence across justice services.
          </p>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            This blog is where we'll share what we're building, what we're learning, and what's coming next. From pilots and partnerships to real-world tools that make work easier, our mission is simple: to use AI to help make justice faster, fairer and more human.
          </p>
          <h2 className="text-2xl font-semibold mb-4 mt-8">Who we are</h2>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            The Justice AI Unit was established in late 2024 as part of the government's wider ambition to responsibly scale AI across public services. We're a cross-functional team bringing together product managers, engineers, designers, policy leads and AI specialists to tackle real problems across prisons, probation, back office functions and more.
          </p>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            So far, we've:
          </p>
          <ul className="list-disc pl-6 mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            <li className="mb-2">Laid solid foundations to make sure we can pilot and scale AI safely</li>
            <li className="mb-2">Tested our first shared AI tools and services for use across justice</li>
            <li className="mb-2">Launched a Justice AI Fellowship to attract top technical talent</li>
            <li className="mb-2">Partnered with leading companies to provide secure access to powerful LLMs</li>
            <li className="mb-2">Worked with UK startups such as Taught by Humans and Pair, who bring fresh, practical approaches to enabling our people with AI</li>
            <li className="mb-2">Started to train MoJ staff at all levels on how to use AI safely and effectively, with more to come in 2025!</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4 mt-8">What we're working on</h2>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            We're delivering AI tools that save time and improve the experience of public service for both staff and the people we support.
          </p>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            For example, we're currently piloting AI transcription and speech tools to help probation officers reduce time spent on admin, so they can focus on building stronger relationships with those they support. We're also rolling out secure AI assistants to help MoJ staff write, summarise and problem-solve more quickly.
          </p>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            We recently took part in the cross-government Microsoft 365 Copilot pilot, working with DWP, DSIT and others to explore the role of generative AI in day-to-day civil service work. You can read more about the findings here.
          </p>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            And we're scaling these tools so that everyone across the justice system can benefit.
          </p>
          <h2 className="text-2xl font-semibold mb-4 mt-8">What makes us different</h2>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            Before joining MoJ, I worked on pandemic response as a No.10 Innovation Fellow. My project was to see if we could use wastewater (yes, measuring sewage) to help predict hospital bed demand. It turned out to be a powerful and cost-effective way to track disease. But what made it work was the team: scientists, engineers, designers and policymakers working directly with decision-makers and users in a new way. That's the model we're bringing to justice.
          </p>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            Here's what sets the Justice AI Unit apart:
          </p>
          <ul className="list-disc pl-6 mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            <li className="mb-2">Interdisciplinary teams, co-located and focused. Product, design, engineering, policy, risk and security all sit together, solving problems collaboratively from day one.</li>
            <li className="mb-2">We build with frontline users. Not just designing for them, but working with them. We embed technologists directly in frontline roles, such as probation, to solve the right problems in the right way.</li>
            <li className="mb-2">We move continuously, not in phases. No endless discovery followed by a long wait for delivery. We do continuous discovery and delivery, finding problems, testing fast and improving rapidly.</li>
            <li className="mb-2">We believe in small teams. You don't need a huge team to make an impact. Even a team of two can build and scale the right thing. We are bringing that lean, focused model to government.</li>
          </ul>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            These principles help us move quickly, learn fast, and deliver services that are cheaper, better and genuinely useful.
          </p>
          <h2 className="text-2xl font-semibold mb-4 mt-8">What to expect from this blog</h2>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            We'll share regular posts from across the team: updates on what we're building, lessons learned, guest blogs from our partners, and reflections on the bigger questions we're tackling.
          </p>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            If you care about justice, public service or responsible AI, we hope you'll follow along.
          </p>
          <p className="mb-7 text-[1.0625rem] leading-[1.75rem] tracking-[-0.01em] font-normal">
            We're just getting started.
          </p>
        </div>
      </div>
    </div>
  )
}
