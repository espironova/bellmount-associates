interface ManagerCardProps {
  role: string;
  tagline: string;
  department: string;
}

const ManagerCard = ({ role, tagline, department }: ManagerCardProps) => {
  const getInitials = (role: string) => {
    return role.split(' ').slice(0, 2).map(word => word[0]).join('');
  };

  return (
    <div className="card-professional text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Profile Placeholder */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-secondary/10">
        <div className="w-full h-full flex items-center justify-center bg-primary/10">
          <div className="text-2xl font-bold text-primary font-montserrat">
            {getInitials(role)}
          </div>
        </div>
      </div>
      
      {/* Role */}
      <h4 className="text-lg font-semibold mb-2 font-montserrat text-foreground">
        {role}
      </h4>
      
      {/* Department */}
      <div className="text-accent font-medium mb-3 text-sm">
        {department}
      </div>
      
      {/* Tagline */}
      <p className="text-muted-foreground text-sm leading-relaxed">
        {tagline}
      </p>
    </div>
  );
};

export default ManagerCard;