import { ThemeProvider } from "@/components/shared/theme-provider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
};

export default RootLayout;
