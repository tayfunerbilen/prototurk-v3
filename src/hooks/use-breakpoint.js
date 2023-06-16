import _useBreakpoint from 'use-breakpoint'

const BREAKPOINTS = {
	mobile: 0,
	desktop: 1124
}
export const useBreakpoint = () => _useBreakpoint(BREAKPOINTS)
