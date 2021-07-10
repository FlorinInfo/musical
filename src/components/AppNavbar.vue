<template>
	<div class="app-navbar">
		<span class="app-navbar__logo">EMusic</span>
		<div class="app-navbar__sign">
			<button class="app-navbar__sign--up">
				<ion-icon name="play-outline"></ion-icon> Inregistreaza-ti formatia
			</button>
			<button class="app-navbar__sign--in">Autentificare</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.app-navbar {
	background-color: $color-black;
	padding: 2rem 10rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	&__logo {
		display: block;
		margin: auto 0;
		color: $color-white;
		font-family: $base-font-light;
		font-size: 2.3rem;
		font-weight: 700;
		letter-spacing: 0.2rem;
	}

	&__sign {
		display: flex;
		flex-direction: row;

		&--in {
			display: block;
			background: $color-white;
			color: $color-black;
			margin: 0 auto;
			vertical-align: middle;
			font-size: 1.6rem;
			text-align: center;
			font-family: $base-font-medium;
			padding: 0 1rem;
			border: none;
			border-radius: 2rem;

			&:hover {
				cursor: pointer;
				background-color: rgb(238, 238, 238);
			}
		}

		&--up {
			display: block;
			color: $color-white;
			font-size: 1.6rem;
			font-family: $base-font-medium;
			margin-top: auto;
			margin-bottom: auto;
			margin-right: 1.5rem;
			background: none;
			outline: none;
			border: none;
			padding: 1rem;
			border-radius: 2rem;

			ion-icon {
				transform: translateY(2px);
			}

			&:hover {
				cursor: pointer;
				background: rgba(255, 255, 255, 0.219);
			}
		}
	}
}
</style>