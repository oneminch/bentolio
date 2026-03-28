export const useAnimateContent = () => {
	const { $gsap } = useNuxtApp();

	const ctx = ref<gsap.Context | null>(null);

	const animate = () => {
		ctx.value = $gsap.context(() => {
			$gsap.fromTo(
				'.animate-layout',
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 0.75,
					delay: 0.5,
					ease: 'elastic.out(0.5, 0.3)'
				}
			);
			$gsap.fromTo(
				'.animate-element',
				{ scale: 0.75, opacity: 0, y: 20 },
				{
					scale: 1,
					opacity: 1,
					y: 0,
					duration: 0.15,
					delay: 0.9,
					ease: 'elastic.out(0.5, 0.3)',
					stagger: 0.1
				}
			);
		});
	}

	onMounted(animate);

	onUnmounted(() => {
		ctx.value && ctx.value.revert();
	});
}
