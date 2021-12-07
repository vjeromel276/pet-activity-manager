import { Center, VStack } from '@chakra-ui/react';

import { ActivityCard } from './ActivityCard';
import { ActivityManager } from './ActivityManager';
import { useState } from 'react';

const DUMMY_ACTIVITY = [
  {
    activity: 'Meal',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: new Date(2021, 2, 28).toLocaleDateString(),
  },
];

function App() {
  const [activities, setActivities] = useState(DUMMY_ACTIVITY);

  const addActivityHandler = activity => {
    setActivities(prevActivities => {
      return [activity, ...prevActivities];
    });
  };

  console.log(activities);
  return (
    <Center margin="20px">
      <VStack height="100%" width="500px">
        <ActivityManager
          activities={activities}
          addActivity={addActivityHandler}
        />
        {activities.map(activity => (
          <ActivityCard
            activity={activity.activity}
            date={activity.date}
            note={activity.note}
          />
        ))}
      </VStack>
    </Center>
  );
}

export default App;
