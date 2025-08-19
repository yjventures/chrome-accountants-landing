import { Link } from "react-router-dom";
import { ArrowLeft, Home, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

const NotFound404 = () => {

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-ca-blue to-ca-dark text-white"
      aria-labelledby="nf-title"
    >
      <header className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-ca-mango">
          <ArrowLeft className="h-4 w-4" />
          Back to site
        </Link>
      </header>

      <section className="container mx-auto px-4 pb-20 pt-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <p className="text-ca-mango font-semibold tracking-wide mb-3">404 - Page Not Found</p>

            <h1 id="nf-title" className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Stop chasing broken links. <br />
              <span className="text-ca-mango">Start building your future.</span>
            </h1>

            <p className="text-lg lg:text-xl text-white max-w-xl mb-8">
              The page you’re looking for doesn’t exist or has moved. As your financial champion
              and translator, we’ll get you to the right place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/">
                <Button className="bg-ca-mango text-ca-blue hover:opacity-90">
                  <Home className="h-5 w-5 mr-2" />
                  Go to Homepage
                </Button>
              </Link>

              <Link to="/contact-chrome-accountants">
                <Button className="bg-white text-ca-blue hover:opacity-90">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book a Strategy Session
                </Button>
              </Link>
            </div>

            {/* Helpful quick links */}
            <nav className="mt-10">
              <ul className="grid sm:grid-cols-2 gap-3 text-white">
                <li>
                  <Link className="hover:text-white underline/30 hover:underline" to="/services-chrome-accountants">
                    Explore Services
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white underline/30 hover:underline" to="/why-us-chrome-accountants">

                    Why Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white underline/30 hover:underline" to="/resources-chrome-accountants">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white underline/30 hover:underline" to="/contact-chrome-accountants">
                    Contact Chrome Accountants
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 shadow-xl">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="text-7xl font-black tracking-tight">404</div>
                <div className="mt-2 text-white">
                  We couldn’t find that page. Visit the linked pages, or head home.
                </div>
              </div>

              {/* Badge / brand accent */}
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-block h-3 w-3 rounded-full bg-ca-mango shadow-[0_0_0_6px_rgba(255,186,0,0.15)]" />
                <p className="text-sm text-white">
                  Chrome Financial Health System™ - your roadmap to clarity and results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound404;
