export default function Greeting() {
  const monthNames: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date = new Date();
  const hour = date.getHours();

  let greeting = 'Good Evening';

  if (hour >= 6 && hour < 12) {
    greeting = 'Good Morning';
  } else if (hour >= 12 && hour < 17) {
    greeting = 'Good Afternoon';
  }

  return (
    <div className="my-10 flex items-center gap-4">
      <div className="mx-3 my-auto text-center text-2xl font-bold">
        {monthNames[date.getMonth()]}
        <br />
        {date.getDate()}
      </div>
      <div>
        <div className="text-3xl font-bold">{greeting}</div>
        <div className="text-3xl font-bold text-gray-500">What&#39;s your plan for today?</div>
      </div>
    </div>
  );
}
