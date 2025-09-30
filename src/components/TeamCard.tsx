interface TeamCardProps {
  name: string;
  position: string;
  qualifications: string[];
  experience: string;
  image?: string;
  bio?: string;
}

const TeamCard = ({ 
  name, 
  position, 
  qualifications, 
  experience, 
  image, 
  bio 
}: TeamCardProps) => {
  return (
    <div className="card-team">
      {/* Profile Image */}
      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-secondary/10">
        {image ? (
          <img 
            src={image} 
            alt={`${name} - ${position}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/10">
            <div className="text-4xl font-bold text-primary font-montserrat">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        )}
      </div>
      
      {/* Name and Position */}
      <h3 className="text-xl font-semibold mb-2 font-montserrat text-foreground">
        {name}
      </h3>
      
      <div className="text-secondary font-medium mb-3">
        {position}
      </div>
      
      {/* Qualifications */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {qualifications.map((qual, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
          >
            {qual}
          </span>
        ))}
      </div>
      
      {/* Experience */}
      <div className="text-muted-foreground text-sm mb-4 font-medium">
        {experience}
      </div>
      
      {/* Bio */}
      {bio && (
        <p className="text-muted-foreground text-sm leading-relaxed">
          {bio}
        </p>
      )}
    </div>
  );
};

export default TeamCard;