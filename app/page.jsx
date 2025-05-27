import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";

export default function LandingPage() {
  return (
    <div className="flex flex-col pt-16 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* ───── Hero ───── */}
      <section className="mt-20 pb-12 space-y-10 md:space-y-15 px-5 relative">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <Badge 
            variant="outline" 
            className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200 hover:scale-105 transition-transform duration-300 shadow-lg backdrop-blur-sm"
          >
            ✨ Split expenses. Simplify life.
          </Badge>

          <h1 className="gradient-title mx-auto max-w-6xl text-4xl font-bold md:text-8xl animate-in slide-in-from-bottom-8 duration-1000 relative">
            The <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-pulse">smartest way</span> to split expenses with friends
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full blur-sm opacity-60 animate-bounce delay-1000"></div>
          </h1>

          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed animate-in slide-in-from-bottom-6 duration-1000 delay-200 leading-relaxed">
            Track shared expenses, split bills effortlessly, and settle up
            quickly. <span className="text-green-600 font-medium">Never worry about who owes who again.</span>
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row justify-center animate-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>

        
      </section>

      {/* ───── Features ───── */}
      <section id="features" className="bg-gradient-to-br from-gray-50 via-white to-green-50/30 py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <Badge 
            variant="outline" 
            className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200 hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            🚀 Features
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
            Everything you need to split expenses
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Our platform provides all the tools you need to handle shared
            expenses with <span className="text-green-600 font-medium">effortless ease</span>.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ title, Icon, bg, color, description }, index) => (
              <Card
                key={title}
                className="flex flex-col items-center space-y-4 p-6 text-center group hover:shadow-xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 transform hover:-translate-y-2 animate-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`rounded-full p-3 ${bg} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className={`h-6 w-6 ${color} group-hover:animate-pulse`} />
                </div>

                <h3 className="text-xl font-bold group-hover:text-green-700 transition-colors duration-300">{title}</h3>
                <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{description}</p>
                
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── How it works ───── */}
      <section id="how-it-works" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/20 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <Badge 
            variant="outline" 
            className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200 hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            📋 How It Works
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
            Splitting expenses has never been easier
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Follow these simple steps to start tracking and splitting expenses
            with friends.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-6 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-green-200 via-emerald-300 to-green-200"></div>
            
            {STEPS.map(({ label, title, description }, index) => (
              <div 
                key={label} 
                className="flex flex-col items-center space-y-4 group animate-in slide-in-from-bottom-6 duration-1000 relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100 text-xl font-bold text-green-600 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{label}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-green-700 transition-colors duration-300">{title}</h3>
                <p className="text-gray-500 text-center group-hover:text-gray-600 transition-colors duration-300 max-w-xs">{description}</p>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-green-50/30 py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <Badge 
            variant="outline" 
            className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200 hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            💬 Testimonials
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
            What our users are saying
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, role, image }, index) => (
              <Card 
                key={name} 
                className="flex flex-col justify-between group hover:shadow-xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 transform hover:-translate-y-2 animate-in slide-in-from-bottom-4 duration-1000 relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="space-y-4 p-6 relative z-10">
                  <div className="text-4xl text-green-200 mb-2">"</div>
                  <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300 italic relative">
                    {quote}
                  </p>
                  <div className="flex items-center space-x-3 pt-4">
                    <Avatar className="ring-2 ring-green-100 group-hover:ring-green-200 transition-all duration-300">
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback className="uppercase bg-gradient-to-br from-green-100 to-emerald-100 text-green-700">
                        {name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-medium group-hover:text-green-700 transition-colors duration-300">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </CardContent>
                
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Call‑to‑Action ───── */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white animate-in slide-in-from-bottom-4 duration-1000">
            Ready to <span className="text-green-200">simplify</span> expense sharing?
          </h2>
          <p className="mx-auto max-w-[600px] text-green-100 md:text-xl/relaxed animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            Join <span className="font-semibold text-white">thousands of users</span> who have made splitting expenses
            stress‑free.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group animate-in slide-in-from-bottom-4 duration-1000 delay-300"
          >
            <Link href="/dashboard">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="border-t bg-gradient-to-r from-gray-50 to-green-50/30 py-12 text-center text-sm text-muted-foreground relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.05),transparent_50%)]"></div>
        <div className="relative">
          © {new Date().getFullYear()} <span className="font-semibold text-green-600">Splitr</span>. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";

// export default function LandingPage() {
//   return (
//     <div className="flex flex-col pt-16">
//       {/* ───── Hero ───── */}
//       <section className="mt-20 pb-12 space-y-10 md:space-y-15 px-5">
//         <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
//           <Badge variant="outline" className="bg-green-100 text-green-700">
//             Split expenses. Simplify life.
//           </Badge>

//           <h1 className="gradient-title mx-auto max-w-6xl text-4xl font-bold md:text-8xl">
//             The smartest way to split expenses with friends
//           </h1>

//           <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
//             Track shared expenses, split bills effortlessly, and settle up
//             quickly. Never worry about who owes who again.
//           </p>

//           <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
//             <Button
//               asChild
//               size="lg"
//               className="bg-green-600 hover:bg-green-700"
//             >
//               <Link href="/dashboard">
//                 Get Started
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="border-green-600 text-green-600 hover:bg-green-50"
//             >
//               <Link href="#how-it-works">See How It Works</Link>
//             </Button>
//           </div>
//         </div>

//         <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
//           <div className="gradient p-1 aspect-[16/9]">
//             <Image
//               src="/hero.png"
//               width={1280}
//               height={720}
//               alt="Banner"
//               className="rounded-lg mx-auto"
//               priority
//             />
//           </div>
//         </div>
//       </section>

//       {/* ───── Features ───── */}
//       <section id="features" className="bg-gray-50 py-20">
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <Badge variant="outline" className="bg-green-100 text-green-700">
//             Features
//           </Badge>
//           <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
//             Everything you need to split expenses
//           </h2>
//           <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
//             Our platform provides all the tools you need to handle shared
//             expenses with ease.
//           </p>

//           <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {FEATURES.map(({ title, Icon, bg, color, description }) => (
//               <Card
//                 key={title}
//                 className="flex flex-col items-center space-y-4 p-6 text-center"
//               >
//                 <div className={`rounded-full p-3 ${bg}`}>
//                   <Icon className={`h-6 w-6 ${color}`} />
//                 </div>

//                 <h3 className="text-xl font-bold">{title}</h3>
//                 <p className="text-gray-500">{description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ───── How it works ───── */}
//       <section id="how-it-works" className="py-20">
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <Badge variant="outline" className="bg-green-100 text-green-700">
//             How It Works
//           </Badge>
//           <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
//             Splitting expenses has never been easier
//           </h2>
//           <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
//             Follow these simple steps to start tracking and splitting expenses
//             with friends.
//           </p>

//           <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
//             {STEPS.map(({ label, title, description }) => (
//               <div key={label} className="flex flex-col items-center space-y-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
//                   {label}
//                 </div>
//                 <h3 className="text-xl font-bold">{title}</h3>
//                 <p className="text-gray-500 text-center">{description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ───── Testimonials ───── */}
//       <section className="bg-gray-50 py-20">
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <Badge variant="outline" className="bg-green-100 text-green-700">
//             Testimonials
//           </Badge>
//           <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
//             What our users are saying
//           </h2>

//           <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {TESTIMONIALS.map(({ quote, name, role, image }) => (
//               <Card key={name} className="flex flex-col justify-between">
//                 <CardContent className="space-y-4 p-6">
//                   <p className="text-gray-500">{quote}</p>
//                   <div className="flex items-center space-x-3">
//                     <Avatar>
//                       {/* Placeholder avatar */}
//                       <AvatarImage src={image} alt={name} />
//                       <AvatarFallback className="uppercase">
//                         {name.charAt(0)}
//                       </AvatarFallback>
//                     </Avatar>
//                     <div className="text-left">
//                       <p className="text-sm font-medium">{name}</p>
//                       <p className="text-sm text-muted-foreground">{role}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ───── Call‑to‑Action ───── */}
//       <section className="py-20 gradient">
//         <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
//           <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
//             Ready to simplify expense sharing?
//           </h2>
//           <p className="mx-auto max-w-[600px] text-green-100 md:text-xl/relaxed">
//             Join thousands of users who have made splitting expenses
//             stress‑free.
//           </p>
//           <Button asChild size="lg" className="bg-green-800 hover:opacity-90">
//             <Link href="/dashboard">
//               Get Started
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Link>
//           </Button>
//         </div>
//       </section>

//       {/* ───── Footer ───── */}
//       <footer className="border-t bg-gray-50 py-12 text-center text-sm text-muted-foreground">
//         © {new Date().getFullYear()} Splitr. All rights reserved.
//       </footer>
//     </div>
//   );
// }
