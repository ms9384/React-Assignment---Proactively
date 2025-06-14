import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import GradientScreen from './(tabs)/splash-screen';


export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Replace with your real route (e.g. "/tabs" or "/home")
    const timer = setTimeout(() => router.replace('/login'), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return <GradientScreen />;
}
