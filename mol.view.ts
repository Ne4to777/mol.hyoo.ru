namespace $.$$ {
	export class $hyoo_mol extends $.$hyoo_mol {
		
		pages() {

			const app = this.$.$mol_state_arg.value( 'app' )
			
			return [
				this.Menu(),
				... ( app === 'components' ) ?  this.Components_app().pages() : [],
				... ( app === 'view.tree' ) ?  this.View_tree_app().pages() : [],
				... ( app === 'articles' ) ?  this.Articles_app().pages() : [],
				//... ( app === 'icons' ) ?  [ this.Icons_app() ] : [],
				// ... ( app === 'slides' ) ?  [ this.Slides_app() ] : [],
			]

		}

	}
}
