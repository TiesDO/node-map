import { component$, useStylesScoped$ } from '@builder.io/qwik';

import toolbarStyle from './toolbar.css?inline';

export const Toolbar = component$(() => {
	useStylesScoped$(toolbarStyle);

	return <div class='toolbar'>toolbar</div>;
});
