import { AchievementShowcase } from "@/components/home/AchievementShowcase";
import { CtaSection } from "@/components/home/CtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProfileIntro } from "@/components/home/ProfileIntro";
import { RecentPosts } from "@/components/home/RecentPosts";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProfileIntro />
      <RecentPosts />
      <AchievementShowcase />
      <CtaSection />
    </div>
  );
}
