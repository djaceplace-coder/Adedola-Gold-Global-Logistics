import { BookOpen, FileText, Globe, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Learn() {
  const articles = [
    { title: "How to Ship Food Items from Nigeria: A Complete Guide", tag: "Guide", read: "5 min read", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=800" },
    { title: "Malaysia Import Rules Every Nigerian Business Should Know", tag: "Rules", read: "8 min read", img: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800" },
    { title: "Qatar Customs 101: What You Can and Can't Ship", tag: "Customs", read: "6 min read", img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800" },
    { title: "Sending Care Packages to the UK/USA: What Diaspora Families Need to Know", tag: "Diaspora", read: "7 min read", img: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=800" },
    { title: "FCL vs LCL: Which Ocean Freight Option Is Right for You?", tag: "Logistics", read: "4 min read", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800" },
    { title: "A Beginner's Guide to Nigerian Import Duties", tag: "Finance", read: "10 min read", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800" },
    { title: "Top 10 Local Nigerian Foods Diaspora Customers Order Most", tag: "Sourcing", read: "5 min read", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800" },
    { title: "Rural Nigeria Delivery: How We Reach Where Others Don't", tag: "Logistics", read: "4 min read", img: "https://images.unsplash.com/photo-1596683720379-b73ce1e4cf54?q=80&w=800" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-gray-50 min-h-screen"
    >
      <section className="bg-gray-900 text-white py-20 lg:py-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Guides, Tips & Everything Cross-Border Shipping</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real answers for real shippers — whether you're sending a container or a care package home.
          </p>
        </motion.div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Hub Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: BookOpen, name: "Guides & How-Tos" },
              { icon: Globe, name: "Diaspora Corner" },
              { icon: FileText, name: "Glossary & Terms" },
              { icon: HelpCircle, name: "FAQs by Channel" }
            ].map((cat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                key={i} 
                className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:border-amber-200 hover:bg-amber-50 cursor-pointer transition-colors"
              >
                <cat.icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 text-sm md:text-base">{cat.name}</h3>
              </motion.div>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  key={i} 
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all cursor-pointer flex flex-col"
                >
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img src={article.img} alt={article.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">{article.tag}</span>
                      <span className="text-xs text-gray-400">{article.read}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors leading-snug mb-4">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-auto">Read article →</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
             <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-xl font-medium transition-colors">
               Load More Articles
             </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
