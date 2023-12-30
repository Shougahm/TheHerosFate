import { App } from "./App.mjs";

window.onload = async () => {
	await Component("Character");
    await Component("Room");
	await Component("Action");
	await Component("SpellList");

	Vue.component("Box", {
		props: ['label'],
		data: () => ({ collapsed: false }),
        template: `
			<div class="box">
				<div class='box-header' @click='collapsed = !collapsed'>
					<span>{{label}}</span>
					<span class="expander-button" :class="{ 'expander-button-expanded': !collapsed }"></span> 
				</div>
				<div v-if="!collapsed">
					<slot />
				</div>
			</div>`
	});

	Vue.component("Help", {
		props: ['shown', 'label'],
        template: `<span>
				<b class='help-icon' @click='shown = !shown'/>
				<div v-if='shown' class='help-bg'>
					<div class='box-header' @click='shown=false'>
						{{label}}
						<span style='margin-left: auto'>X</span>
					</div>
					<div class='help-content'>
						<slot/>
					</div>
				</span>
			</div>`
	});

	Vue.component("number-checkbox", {
		props: ['value'],
		emits: ['update:value'],
		mounted() { this.$el.checked = this.$props.value != 0; },
		updated() { this.$el.checked = this.$props.value != 0; },
		template: `<input type="checkbox" v-bind:value="value" 
			v-on:input="$emit('input', $event.target.checked ? 1 : 0), $emit('change')">`
	});

	Vue.component("number-input", {
		template: `<input type="number" maxlength='2' v-bind:value="value" v-on:input="$emit('input', Number($event.target.value))" @keypress="requireNumber($event)">`,
		props: ['value'],
		emits: ['update:value'],
		methods: {
			requireNumber (e) {
				let code = (typeof e.which == "number") ? e.which : e.keyCode
				if (code < 48 || code > 57) {
					e.preventDefault();
				}
			},
		},
	});

	bootstrap(new App());
}