import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

interface LeadershipCardProps {
  name: string;
  position: string;
  qualifications: string[];
  experience: string;
  bio: string;
  tagline: string;
  image?: string;
}

const LeadershipCard = ({ 
  name, 
  position, 
  qualifications, 
  experience, 
  bio, 
  tagline,
  image 
}: LeadershipCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="card-professional cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          {/* Profile Image */}
          <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-secondary/10 group-hover:shadow-lg transition-all duration-300">
            {image ? (
              <img 
                src={image} 
                alt={`${name} - ${position}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <div className="text-5xl font-bold text-primary font-montserrat">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            )}
          </div>
          
          {/* Name and Position */}
          <h3 className="text-2xl font-bold mb-2 font-playfair text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          
          <div className="text-accent font-semibold mb-3 text-lg">
            {position}
          </div>
          
          {/* Tagline */}
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed italic">
            {tagline}
          </p>
          
          {/* Experience */}
          <div className="text-primary font-medium text-sm mb-4">
            {experience}
          </div>
          
          {/* Qualifications */}
          <div className="flex flex-wrap justify-center gap-2">
            {qualifications.map((qual, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
              >
                {qual}
              </span>
            ))}
          </div>
          
          {/* Click indicator */}
          <div className="mt-4 text-xs text-muted-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to read full bio
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-primary">
            {name} - {position}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-secondary/10 flex-shrink-0">
              {image ? (
                <img 
                  src={image} 
                  alt={`${name} - ${position}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <div className="text-2xl font-bold text-primary font-montserrat">
                    {name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <div className="text-accent font-semibold mb-2">{position}</div>
              <div className="text-muted-foreground text-sm">{experience}</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-3">Qualifications</h4>
            <div className="flex flex-wrap gap-2">
              {qualifications.map((qual, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                >
                  {qual}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-3">Professional Background</h4>
            <p className="text-muted-foreground leading-relaxed">{bio}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadershipCard;