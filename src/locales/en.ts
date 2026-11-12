export const en = {
  auth: {
    adminSignInHeading: 'Admin sign in',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    forgotPasswordPrompt: 'Forgot your password?',
    resetPasswordButton: 'Reset Password',
    resetPasswordButtonLabel: 'Reset password',
    signingInButton: 'Signing in…',
    signInButton: 'Sign in',
    signInSuccess: 'Sign in successful.',
    signInFailed: 'Sign in failed. Please try again.',
    emailAndPasswordRequired: 'Email and password are required.',
    invalidCredentials: 'Invalid login credentials.',
    unableToSignIn: 'Unable to sign in right now.',
    missingAuthenticationToken:
      'The server did not return an authentication token.',
  },
  routes: {
    flyer: '/flyers',
  },
  metadata: {
    portfolioTitle: "Holly's Art Studio | Live Wedding Painting",
    portfolioDescription:
      "Live wedding painting and bespoke oil portraits by Holly's Art Studio.",
    flyerTitle: "Holly's Art Studio | Flyer",
    flyerDescription:
      "Discover live wedding painting and bespoke oil portraits by Holly's Art Studio.",
  },
  site: {
    name: "Holly's Art Studio",
    email: 'hollysartstudio@gmail.com',
    emailUrl: 'mailto:hollysartstudio@gmail.com',
    instagram: 'Instagram',
    emailLabel: 'Email',
    websiteLabel: 'Website',
    instagramHandle: '@hollys_art_studio',
    instagramUrl: 'https://www.instagram.com/hollys_art_studio',
    website: 'hollysartstudio.co.uk',
    websiteUrl: 'https://hollysartstudio.co.uk',
  },
  navigation: {
    tabListLabel: 'Studio pages',
    tabs: [
      { id: 'home', label: 'Live Wedding Painting' },
      { id: 'process', label: 'The Process' },
      { id: 'details', label: 'About Me' },
      { id: 'gallery', label: 'Gallery' },
    ],
  },
  banner: {
    description:
      'Specialising in wedding painting, pet and family portrait commissions',
  },
  footer: {
    copyright: "© 2026 Holly's Art Studio",
  },
  home: {
    heading:
      'Add a little magic to your special day with live wedding painting',
    description:
      'Guests can watch the artwork take shape, leaving you with a one-of-a-kind keepsake of the moment.',
  },
  about: {
    heading: 'About me',
    description:
      'Hi, I’m Holly, the artist behind Holly’s Art Studio. I specialize in live wedding painting and custom oil portraits, capturing life’s most cherished moments on canvas. My love for art began at a young age, drawing people and capturing personality through fine detail. As a warm, friendly, and sociable painter, I adore connecting with couples and guests, bringing both fine art and a gentle, joyous energy to your special day.',
    artistImageAlt: 'Holly, the artist behind Holly’s Art Studio',
  },
  gallery: {
    heading: 'Recent Work',
  },
  process: {
    heading: 'The Process',
    introduction:
      'From our first conversation to the last little brushstroke, we’ll make a keepsake that feels wonderfully yours.',
    bookingHeading: 'A note about booking',
    booking:
      'Your date is secured with a non-refundable deposit. The remaining balance is due two weeks before your booking.',
    steps: [
      {
        title: 'A little planning call',
        description:
          'We start with a friendly telephone chat to dream up the moment you would love to remember: perhaps your first kiss, your walk down the aisle, or a quiet moment in the gardens. We’ll talk through the scene, the feeling you want to keep, and which of my previous painting styles has caught your eye.',
      },
      {
        title: 'Setting the scene',
        description:
          'On your wedding day, I arrive with my table, easel, canvas, and oil paints, ready to make a little studio wherever the celebration takes us. I sketch the composition, then begin building the main shapes, colours, and details into the painting.',
      },
      {
        title: 'A painting guests can watch unfold',
        description:
          'As the first layers come to life, guests are welcome to stop by, have a look, and enjoy seeing the painting take shape. I love chatting with everyone and adding a little friendly, arty entertainment to the day. I’ll leave the celebration with the painting around 80% complete.',
      },
      {
        title: 'Finishing touches back at the studio',
        description:
          'Once the first layer has dried enough, I bring the painting home to add the final touches. I then use a breathable satin retouch varnish, so the oil painting can continue drying while gaining a soft, finished sheen—without waiting for the lengthy full-cure period before it can be enjoyed.',
      },
    ],
  },
  portfolio: {
    pieces: {
      sonyaDave: {
        title: 'Sonya & Dave',
        imageAlt: 'Live wedding painting of Sonya and Dave',
      },
      sheilaReg: {
        title: 'Sheila & Reg',
        imageAlt: 'Wedding painting of Sheila and Reg',
      },
      aliceTheCat: {
        title: 'Alice the Cat',
        imageAlt: 'Portrait painting of Alice the cat',
      },
      hannahLiam: {
        title: 'Hannah & Liam',
        imageAlt: 'Painted portrait of a couple displayed on an artist’s easel',
      },
      danielleChad: {
        title: 'Danielle & Chad',
        imageAlt: 'Painting of a couple holding their baby outdoors',
      },
      rachelNeville: {
        title: 'Rachel & Neville',
        imageAlt: 'Painting of a newly married couple holding hands outdoors',
      },
    },
    studioMoments: {
      painting: {
        title: 'Painting live on a wedding day',
        imageAlt: 'Holly painting at a wedding',
      },
    },
  },
  flyer: {
    title: 'Fine Art Live Wedding Painting',
    quote: 'Capturing the magic of your day, one brushstroke at a time.',
    aboutHeading: 'A little piece of your day, painted live',
    about:
      "Hi, I'm Holly! I paint a bespoke oil portrait of your special day as it unfolds, creating a lovely moment for your guests to enjoy and a one-of-a-kind keepsake for you to treasure. From the romance of your ceremony to the joy of your reception, your favourite moments come to life on canvas.",
    contactHeading: "Let's make something lovely",
    contactIntroduction:
      "Planning your wedding or curious about live painting? I'd love to hear from you.",
    qrCodeLabel: 'QR code linking to Holly’s Art Studio Instagram',
    qrCodeCaption: 'See more paintings',
    downloadButton: 'Download flyer PDF',
    printButton: 'Print flyer',
    pdfFilename: 'hollys-art-studio-flyer.pdf',
  },
  errors: {
    rootElementNotFound: 'Root element not found',
    pageDescriptionNotFound: 'Page description metadata not found',
    flyerContentNotFound: 'Flyer content could not be found.',
    flyerImageCouldNotLoad: (alt: string) =>
      `Could not load flyer image: ${alt}`,
    createFlyerPdfFailed: 'Unable to create the flyer PDF.',
  },
} as const;

export type StudioTabId = (typeof en.navigation.tabs)[number]['id'];
