import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Guest',
    level: 'beginner',
    completedTutorials: [],
    currentTutorial: null,
    progress: {}
  });

  const updateProgress = (tutorialId, stepIndex, completed = true) => {
    setUser(prev => ({
      ...prev,
      progress: {
        ...prev.progress,
        [tutorialId]: {
          ...prev.progress[tutorialId],
          [stepIndex]: completed
        }
      }
    }));
  };

  const completeTutorial = (tutorialId) => {
    setUser(prev => ({
      ...prev,
      completedTutorials: [...prev.completedTutorials, tutorialId]
    }));
  };

  const value = {
    user,
    setUser,
    updateProgress,
    completeTutorial
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};