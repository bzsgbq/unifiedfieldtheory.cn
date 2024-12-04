/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - The first entry MUST be a heading
 * - Heading entries MUST include `header: true` and `type`
 * - Heading entries MAY include `nested: true` to move that heading and following links under the previous unnested heading
 * - Heading entries MAY include `collapsed: true` to mark it and its children as collapsed by default
 * - Link entries MUST include `slug` (which excludes the language code)
 *
 * For translators:
 *
 * Copy the English `key` value unchanged and translate only the `text` into your language:
 *
 * `src/i18n/en/nav.ts`: `{ text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },`
 * `src/i18n/ja/nav.ts`: `'getting-started': 'はじめに',`
 */

export default [
	{ text: 'Welcome', header: true, type: 'learn', key: 'welcome' },
	{ text: 'About Xiangqian Zhang', slug: 'about-xiangqian-zhang', key: 'about-xiangqian-zhang' },
	{ text: "Zhang's videos", slug: 'videos-of-zhang', key: 'videos-of-zhang' },
	{ text: 'About website', slug: 'about-website', key: 'about-website' },
	{ text: 'Join community', slug: 'join-community', key: 'join-community' },
	// {
	// 	text: 'Research Experiment',
	// 	header: true,
	// 	collapsed: true,
	// 	type: 'learn',
	// 	key: 'researchExperiment',
	// },
	// {
	// 	text: 'Generation of gravitational fields by low-voltage varying electromagnetic fields',
	// 	slug: 'research-experiment/generation-of-gravitational-fields-by-low-voltage-varying-electromagnetic-fields',
	// 	key: 'research-experiment/generation-of-gravitational-fields-by-low-voltage-varying-electromagnetic-fields',
	// },
	{ text: 'Academic Paper', header: true, collapsed: true, type: 'learn', key: 'academicPaper' },
	{
		text: 'Unified Field EquationGenerated by Longitudinal Electromagnetic (LEM) Waves',
		slug: 'academic-paper/unified-field-equation-generated-by-longitudinal-electromagnetic-lem-waves',
		key: 'academic-paper/unified-field-equation-generated-by-longitudinal-electromagnetic-lem-waves',
	},
	{ text: 'Resources', header: true, collapsed: true, type: 'learn', key: 'resources' },
	{
		text: 'Relevant literature',
		slug: 'resources/relevant-literature',
		key: 'resources/relevant-literature',
	},
	{
		text: 'Field animations',
		slug: 'resources/field-animations',
		key: 'resources/field-animations',
	},
	{
		text: 'Use of artificial sites',
		slug: 'resources/use-of-artificial-sites',
		key: 'resources/use-of-artificial-sites',
	},
	{ text: 'Main works', header: true, type: 'learn', key: 'mainWorks' },
	{
		text: 'Unified Field Theory',
		header: true,
		nested: true,
		collapsed: true,
		type: 'learn',
		key: 'unifiedFieldTheory',
	},
	{
		text: 'Preface',
		slug: 'main-works/unified-field-theory/section-0',
		key: 'main-works/unified-field-theory/section-0',
	},
	{
		text: '1. The Composition of the Universe and the Fundamental Principles of Unified Field Theory',
		slug: 'main-works/unified-field-theory/section-1',
		key: 'main-works/unified-field-theory/section-1',
	},
	{
		text: '2. The Definition of Matter',
		slug: 'main-works/unified-field-theory/section-2',
		key: 'main-works/unified-field-theory/section-2',
	},
	{
		text: '3. The Illusory Nature of the Physical World',
		slug: 'main-works/unified-field-theory/section-3',
		key: 'main-works/unified-field-theory/section-3',
	},
	{
		text: '4. How Physical Concepts are Generated',
		slug: 'main-works/unified-field-theory/section-4',
		key: 'main-works/unified-field-theory/section-4',
	},
	{
		text: '5. Basic Physical Concepts and Derived Physical Concepts',
		slug: 'main-works/unified-field-theory/section-5',
		key: 'main-works/unified-field-theory/section-5',
	},
	{
		text: '6. Classification of Basic Physical Concepts',
		slug: 'main-works/unified-field-theory/section-6',
		key: 'main-works/unified-field-theory/section-6',
	},
	{
		text: '7. How to Describe the Motion of Space Itself',
		slug: 'main-works/unified-field-theory/section-7',
		key: 'main-works/unified-field-theory/section-7',
	},
	{
		text: '8. Why Objects and Space Must Move in the Universe',
		slug: 'main-works/unified-field-theory/section-8',
		key: 'main-works/unified-field-theory/section-8',
	},
	{
		text: '9. The Law of Spiral Motion',
		slug: 'main-works/unified-field-theory/section-9',
		key: 'main-works/unified-field-theory/section-9',
	},
	{
		text: '10. The Parallel Principle',
		slug: 'main-works/unified-field-theory/section-10',
		key: 'main-works/unified-field-theory/section-10',
	},
	{
		text: '11. Geometric Symmetry Equals Physical Conservation',
		slug: 'main-works/unified-field-theory/section-11',
		key: 'main-works/unified-field-theory/section-11',
	},
	{
		text: '12. The Continuity and Discontinuity of Space',
		slug: 'main-works/unified-field-theory/section-12',
		key: 'main-works/unified-field-theory/section-12',
	},
	{
		text: '13. Motion Description Cannot Be Separated from the Observer',
		slug: 'main-works/unified-field-theory/section-13',
		key: 'main-works/unified-field-theory/section-13',
	},
	{
		text: '14. Why Space is Three-Dimensional',
		slug: 'main-works/unified-field-theory/section-14',
		key: 'main-works/unified-field-theory/section-14',
	},
	{
		text: '15. Space Can Store Infinite Information',
		slug: 'main-works/unified-field-theory/section-15',
		key: 'main-works/unified-field-theory/section-15',
	},
	{
		text: '16. Basic Assumptions of Unified Field Theory',
		slug: 'main-works/unified-field-theory/section-16',
		key: 'main-works/unified-field-theory/section-16',
	},
	{
		text: '17. The Physical Definition of Time',
		slug: 'main-works/unified-field-theory/section-17',
		key: 'main-works/unified-field-theory/section-17',
	},
	{
		text: '18. Space-Time Unification Equation',
		slug: 'main-works/unified-field-theory/section-18',
		key: 'main-works/unified-field-theory/section-18',
	},
	{
		text: '19. Spiral Space-Time Wave Equation',
		slug: 'main-works/unified-field-theory/section-19',
		key: 'main-works/unified-field-theory/section-19',
	},
	{
		text: '20. Understanding the Nature of Light Speed',
		slug: 'main-works/unified-field-theory/section-20',
		key: 'main-works/unified-field-theory/section-20',
	},
	{
		text: '21. Explaining the Invariance of Light Speed in Lorentz Transformation',
		slug: 'main-works/unified-field-theory/section-21',
		key: 'main-works/unified-field-theory/section-21',
	},
	{
		text: '22. General Definition of Four Major Fields in the Universe',
		slug: 'main-works/unified-field-theory/section-22',
		key: 'main-works/unified-field-theory/section-22',
	},
	{
		text: '23. Gravitational Field and Mass Definition Equations',
		slug: 'main-works/unified-field-theory/section-23',
		key: 'main-works/unified-field-theory/section-23',
	},
	{
		text: '24. Unified Field Theory Momentum Formula',
		slug: 'main-works/unified-field-theory/section-24',
		key: 'main-works/unified-field-theory/section-24',
	},
	{
		text: '25. Unified Field Theory Dynamics Equation',
		slug: 'main-works/unified-field-theory/section-25',
		key: 'main-works/unified-field-theory/section-25',
	},
	{
		text: "26. Explaining Newton's Three Laws",
		slug: 'main-works/unified-field-theory/section-26',
		key: 'main-works/unified-field-theory/section-26',
	},
	{
		text: '27. Proving the Equivalence of Inertial Mass and Gravitational Mass',
		slug: 'main-works/unified-field-theory/section-27',
		key: 'main-works/unified-field-theory/section-27',
	},
	{
		text: '28. Explaining the Nature of Universal Gravitation',
		slug: 'main-works/unified-field-theory/section-28',
		key: 'main-works/unified-field-theory/section-28',
	},
	{
		text: '29. Gravitational Field and Space-Time Wave Equation',
		slug: 'main-works/unified-field-theory/section-29',
		key: 'main-works/unified-field-theory/section-29',
	},
	{
		text: '30. Electric Charge and Electric Field Definition Equations',
		slug: 'main-works/unified-field-theory/section-30',
		key: 'main-works/unified-field-theory/section-30',
	},
	{
		text: '31. The Rate of Change of Velocity Times Mass Over Time Equals Electromagnetic Force',
		slug: 'main-works/unified-field-theory/section-31',
		key: 'main-works/unified-field-theory/section-31',
	},
	{
		text: '32. Nuclear Force Field Definition Equation',
		slug: 'main-works/unified-field-theory/section-32',
		key: 'main-works/unified-field-theory/section-32',
	},
	{
		text: '33. Magnetic Field Definition Equation',
		slug: 'main-works/unified-field-theory/section-33',
		key: 'main-works/unified-field-theory/section-33',
	},
	{
		text: "34. Deriving Maxwell's Equations",
		slug: 'main-works/unified-field-theory/section-34',
		key: 'main-works/unified-field-theory/section-34',
	},
	{
		text: '35. Time-Varying Gravitational Field Generates Electric Field',
		slug: 'main-works/unified-field-theory/section-35',
		key: 'main-works/unified-field-theory/section-35',
	},
	{
		text: '36. Gravitational Field Changes of Uniform Linear Motion Objects Generate Electric Field',
		slug: 'main-works/unified-field-theory/section-36',
		key: 'main-works/unified-field-theory/section-36',
	},
	{
		text: '37. Magnetic Field of Moving Charges Generates Gravitational Field',
		slug: 'main-works/unified-field-theory/section-37',
		key: 'main-works/unified-field-theory/section-37',
	},
	{
		text: '38. Experimental Status of Gravitational Field Generation by Varying Electromagnetic Fields',
		slug: 'main-works/unified-field-theory/section-38',
		key: 'main-works/unified-field-theory/section-38',
	},
	{
		text: '39. Unified Field Theory Energy Equation',
		slug: 'main-works/unified-field-theory/section-39',
		key: 'main-works/unified-field-theory/section-39',
	},
	{
		text: '40. Photon Model',
		slug: 'main-works/unified-field-theory/section-40',
		key: 'main-works/unified-field-theory/section-40',
	},
	{
		text: 'Appendix: Main Applications of Unified Field Theory',
		slug: 'main-works/unified-field-theory/appendix',
		key: 'main-works/unified-field-theory/appendix',
	},
	{
		text: 'Unveiling the Mystery of Gravity',
		header: true,
		nested: true,
		collapsed: true,
		type: 'learn',
		key: 'gravityMystery',
	},
	{
		text: 'Unveiling the Mystery of Charge and Electromagnetic Fields',
		header: true,
		nested: true,
		collapsed: true,
		type: 'learn',
		key: 'chargeEMMystery',
	},
	{
		text: "Zhang's Mathematical Theory",
		header: true,
		nested: true,
		collapsed: true,
		type: 'learn',
		key: 'zhangMathTheory',
	},
	{
		text: 'Unveiling the Nature of Light',
		header: true,
		nested: true,
		collapsed: true,
		type: 'learn',
		key: 'lightNature',
	},
	{
		text: "A Concise Version of Zhang's Unified Field Theory",
		header: true,
		nested: true,
		collapsed: true,
		type: 'learn',
		key: 'zhangUnifiedField',
	},
	// {
	// 	text: 'Successful Experiment of Gravitational Field Generation by Varying Electromagnetic Fields (Including Theoretical Derivation)',
	// 	header: true,
	// 	nested: true,
	// 	collapsed: true,
	// 	type: 'learn',
	// 	key: 'varyingEMFieldGravity',
	// },
	{
		text: 'Application Report for the Development of Artificial Field Scanning Technology',
		header: true,
		nested: true,
		collapsed: true,
		type: 'learn',
		key: 'artificialFieldScanning',
	},
] satisfies NavEntry[];

type NavEntry = {
	/** The visible label for this link or heading. */
	text: string;
	/**
	 * A unique key for this entry. Used in translation files to provide a translation for this entry’s label.
	 * Often the same as `slug` for links (but doesn’t have to be).
	 */
	key: string;
} & (
	| {
			/** The content collection slug for this page *without* the language code. */
			slug: string;
	  }
	| {
			/** Marks this entry as a group heading and starts a new group. */
			header: true;
			/** Whether this group is in the learn or API category (currently unused). */
			type: 'learn' | 'api';
			/** Whether this group should be nested inside the preceding group. */
			nested?: boolean;
			/** Whether this group should be collapsed by default. */
			collapsed?: boolean;
	  }
);
