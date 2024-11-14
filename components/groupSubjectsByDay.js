export const groupSubjectsByDay = (subjects) => {
    // Group subjects by day
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const groupedData = days.map(day => {
      const subjectsForDay = subjects
        .filter(subject => subject.day === day)
        .sort((a, b) => {
          // Sort by time in ascending order
          const timeA = new Date(`1970-01-01T${a.time}:00`);
          const timeB = new Date(`1970-01-01T${b.time}:00`);
          return timeA - timeB;
        });
      
      return {
        title: day,
        data: subjectsForDay,
      };
    });
  
    // Filter out days without subjects
    return groupedData.filter(day => day.data.length > 0);
  };
  