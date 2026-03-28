export default defineAppConfig({
	style: {
		roundedStyle: "rounded-medium"
	},
	portfolio: {
		name: "Dawit",
		subtitle: "I Craft Delightful Web Apps",
		// company: "[COMPANY]",
		avatar: "/profile.jpg",
		customOgImage: "/og-image.png",
		bio: {
			html: "I'm a Full-Stack Problem-Solver specializing in <span class='font-bold text-theme'>Vue</span>, <span class='font-bold text-theme'>Nuxt</span>, <span class='font-bold text-theme'>Tailwind CSS</span>, and <span class='font-bold text-theme'>Node</span>. I sometimes write articles on various software development topics. I'm also a hobbyist photographer.",
			text: "I'm a Full-Stack Problem-Solver Specializing in Vue, Nuxt, Tailwind CSS and Node.js. I Sometimes Write Articles on Various Web Dev Topics. I'm Also a Hobbyist Photographer."
		},
		socials: {
			Bluesky: {
				socialMediaIcon: "simple-icons:bluesky",
				profileUrl: "https://bsky.app/profile/minch.dev",
				socialMediaBgColor: "bg-blue-500!",
				socialMediaBorderColor: "border-blue-500!",
				socialMediaTextColor: "text-white!"
			},
			GitHub: {
				socialMediaIcon: "simple-icons:github",
				profileUrl: "https://github.com/oneminch",
				socialMediaBgColor: "bg-black!",
				socialMediaBorderColor: "border-border!",
				socialMediaTextColor: "text-white!"
			},
			X: {
				socialMediaIcon: "simple-icons:x",
				profileUrl: "https://x.com/oneminch",
				socialMediaBgColor: "bg-black!",
				socialMediaBorderColor: "border-border!",
				socialMediaTextColor: "text-white!"
			},
			LinkedIn: {
				socialMediaIcon: "simple-icons:linkedin",
				profileUrl: "https://linkedin.com/in/oneminch",
				socialMediaBgColor: "bg-blue-600!",
				socialMediaBorderColor: "border-blue-600!",
				socialMediaTextColor: "text-white!"
			}
		},
		cta: {
			contact: "[firstname]@example.com",
			location: "Planet Earth",
			link: {
				url: "https://github.com/oneminch/bentolio",
				label: "Source Code"
			}
		}
	}
});
