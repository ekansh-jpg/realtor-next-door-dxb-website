const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="font-serif text-lg font-bold tracking-wider text-foreground">
          MOHAMMED ZOHAIB
        </p>
        <p className="mt-4 font-sans text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mohammed Zohaib. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
