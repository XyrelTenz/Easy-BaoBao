import { useNavigate } from 'react-router';

export function App() {
  const nav = useNavigate();

  return (
    <view>
      <text bindtap={() => nav('/home')}>Navigate to Home</text>
    </view>
  );
}
