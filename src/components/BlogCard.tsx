import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  link: string;
  className?: string;
}

const BlogCard = ({
  image,
  category,
  title,
  date,
  author,
  excerpt,
  link,
  className = ''
}: BlogCardProps) => {
  return (
    <article className={`group bg-background border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${className}`}>
      {/* Featured Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="inline-flex items-center px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-lg mb-4">
          {category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold font-playfair text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>

        {/* Meta Information */}
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {excerpt}
        </p>

        {/* Read More Link */}
        <Link
          to={link}
          className="inline-flex items-center space-x-2 text-gold font-medium hover:text-primary transition-colors duration-300 group/link"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;