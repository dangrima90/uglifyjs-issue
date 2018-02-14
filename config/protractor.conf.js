/**
 * @author: @AngularClass
 */

require('ts-node/register');
var helpers = require('./helpers');

var JSONReporter = require('jasmine-bamboo-reporter');
var fs = require('fs');

exports.config = {
	baseUrl: 'http://localhost:3000/',

	// use `npm run e2e`
	specs: [
		helpers.root('src/**/**.e2e.ts'),
		helpers.root('src/**/*.e2e.ts')
	],
	exclude: [],

	framework: 'jasmine2',

	allScriptsTimeout: 110000,

	jasmineNodeOpts: {
		showTiming: true,
		showColors: true,
		isVerbose: false,
		includeStackTrace: false,
		defaultTimeoutInterval: 400000
	},
	directConnect: true,

	capabilities: {
		'browserName': 'chrome',
		'chromeOptions': {
			'args': ['show-fps-counter=true',]
		}
	},

	onPrepare: function () {
		browser.ignoreSynchronization = true;
		browser.driver.manage().window().maximize(); // added				 
	},

	/**
	 * Angular 2 configuration
	 *
	 * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
	 * `rootEl`
	 */
	useAllAngular2AppRoots: true,

	suites: {

		// * Tests require DemoOperatorService

		// Run Test 1: VoucherCodes_GenerateData_Success

		run1: [ // This test suite is used to run tests on Bamboo.
			// -------------------- VOUCHERS --------------------
			// 'src/e2e/vouchers/vouchers.qa.e2e.ts',                             // OK [PASSING: 10 FAILING:0 DISABLED:4 (IED-322)]

			// -------------------- QUICK BETS --------------------
			// 'src/e2e/quick-bets/quick-bets.qa.e2e.ts', 			               // OK [PASSING: 0 FAILING:0 DISABLED:2]* (2 INTERMITTENT)
			'src/e2e/quick-bets/quick-bets-pick-own-numbers.qa.e2e.ts',        // OK [PASSING: 3 FAILING:0 DISABLED:0]

			// -------------------- PICK MY OWN --------------------
			// 'src/e2e/pick-my-own/basic-tests.qa.e2e.ts',                       // OK [PASSING: 6 FAILING:0 DISABLED:0]
			// 'src/e2e/pick-my-own/pick-my-own.qa.e2e.ts',                       // OK [PASSING: 3 FAILING:0 DISABLED:0]
			// 'src/e2e/pick-my-own/quick-pick.qa.e2e.ts',                        // OK [PASSING: 6 FAILING:0 DISABLED:0]
			// 'src/e2e/pick-my-own/consecutive-draws.qa.e2e.ts',                 // OK [PASSING: 20 FAILING:0 DISABLED:0]
			// 'src/e2e/pick-my-own/future-draws.qa.e2e.ts',                      // OK [PASSING: 8 FAILING:0 DISABLED:0]
			// 'src/e2e/pick-my-own/quick-bets-multi-draws.qa.e2e.ts',            // OK [PASSING:2 FAILING:0 DISABLED:0]
			// -------------------- MY BETS ------------------------
			// 'src/e2e/my-bets/my-bets.qa.e2e.ts',                               // OK [PASSING:6 FAILING:0 DISABLED:0]* FAILING
			// 'src/e2e/my-bets/my-bets-with-opt-in.qa.e2e.ts',                   // OK [PASSING:6 FAILING:0 DISABLED:0]* FAILING

			// -------------------- FREE TICKETS --------------------
			// 'src/e2e/free-tickets/free-tickets.qa.e2e.ts',                     // OK [PASSING: 5 FAILING:0 DISABLED:0]
			// 'src/e2e/free-tickets/free-tickets-quick-bets.qa.e2e.ts',          // OK [PASSING: 2 FAILING:0 DISABLED:2] (2 INTERMITTENT)
			// 'src/e2e/free-tickets/free-tickets-pick-my-own.qa.e2e.ts',         // OK [PASSING: 11 FAILING:1 DISABLED:0](1 INTERMITTENT)
			// 'src/e2e/free-tickets/free-tickets-my-bets.qa.e2e.ts',             // OK [PASSING: 11 FAILING:0 DISABLED:1 IED-304]* FAILING
			// 'src/e2e/free-tickets/free-tickets-my-bets-with-opt-in.qa.e2e.ts', // OK [PASSING: FAILING: DISABLED:0]	*           FAILING
		],

		// Run Test 2: BetsHistory_GenerateData_Success		

		run2: [ // This test suite is used to run tests on Bamboo.
			// -------------------- MENU ---------------------------
			'src/e2e/burger-menu/**/*qa.e2e.ts',                               // OK [PASSING: 10 FAILING:0 DISABLED:0]
			// -------------------- HERO BETS ----------------------
			// 'src/e2e/hero-bets/**/*qa.e2e.ts',                                 // OK [PASSING: 5 FAILING:0 DISABLED:0]
			// -------------------- CANCEL BETS --------------------
			// 'src/e2e/my-bets/cancel-my-bets.qa.e2e.ts',                        // OK [PASSING: 3 FAILING:0 DISABLED:0]
			// -------------------- FREE TICKETS --------------------
			// 'src/e2e/free-tickets/free-tickets-hero-bets.qa.e2e.ts',	       // OK [PASSING: 4 FAILING:0 DISABLED:0]
			// 'src/e2e/free-tickets/free-tickets-cancel-my-bets.qa.e2e.ts',      // OK [PASSING: 4 FAILING:0 DISABLED:0]

			// -------------------- BET HISTORY --------------------
			// 'src/e2e/bet-history/**/*qa.e2e.ts', // WIP
			// -------------------- INSTANT GAME--------------------
			// 'src/e2e/instant-game/**/*qa.e2e.ts'// WIP
		],

		run0: [ // This test suite is used only to run locally those tests which are currently failing		
			// 'src/e2e/bet-history/**/*qa.e2e.ts', // WIP
			'src/e2e/vouchers/vouchers.qa.e2e.ts',                             // OK [PASSING: 10 FAILING:0 DISABLED:4 (IED-322)]
		],

		// ------------------------------------------
		all: 'src/e2e/**/**/*qa.e2e.ts',
		burgerMenu: 'src/e2e/burger-menu/**/*qa.e2e.ts',
		quickBets: 'src/e2e/quick-bets/**/*qa.e2e.ts',
		quickBetsOnly: 'src/e2e/quick-bets/quick-bets.qa.e2e.ts',
		heroBets: 'src/e2e/hero-bets/**/*qa.e2e.ts',
		pickMyOwn: 'src/e2e/pick-my-own/**/*qa.e2e.ts',
		pmoBasic: 'src/e2e/pick-my-own/basic-tests.qa.e2e.ts',
		pmoConsec: 'src/e2e/pick-my-own/consecutive-draws.qa.e2e.ts',
		pmoFuture: 'src/e2e/pick-my-own/future-draws.qa.e2e.ts',
		pmo: 'src/e2e/pick-my-own/pick-my-own.qa.e2e.ts',
		pmoQuickBets: 'src/e2e/pick-my-own/quick-bets-multi-draws.qa.e2e.ts',
		pmoQuickPick: 'src/e2e/pick-my-own/quick-pick.qa.e2e.ts',
		myBets: 'src/e2e/my-bets/**/*qa.e2e.ts',
		myBetsOnly: 'src/e2e/my-bets/my-bets.qa.e2e.ts',
		myBetsOptIn: 'src/e2e/my-bets/my-bets-with-opt-in.qa.e2e.ts',
		cancelMyBets: 'src/e2e/my-bets/cancel-my-bets.qa.e2e.ts',
		betHistory: 'src/e2e/bet-history/**/*qa.e2e.ts',
		instantGame: 'src/e2e/instant-game/**/*qa.e2e.ts',
		vouchers: 'src/e2e/vouchers/vouchers.qa.e2e.ts',
		vouchersMyBets: 'src/e2e/vouchers/vouchers-my-bets.qa.e2e.ts',
		freeTickets: 'src/e2e/free-tickets/**/*qa.e2e.ts',
		freeTicket: 'src/e2e/free-tickets/free-tickets.qa.e2e.ts',
		freeHeroBets: 'src/e2e/free-tickets/free-tickets-hero-bets.qa.e2e.ts',
		freeQuickBets: 'src/e2e/free-tickets/free-tickets-quick-bets.qa.e2e.ts',
		freeMyBets: 'src/e2e/free-tickets/free-tickets-my-bets.qa.e2e.ts',
		freeMyBetsOptIn: 'src/e2e/free-tickets/free-tickets-my-bets-with-opt-in.qa.e2e.ts',
		freeCancelMyBets: 'src/e2e/free-tickets/free-tickets-cancel-my-bets.qa.e2e.ts',
		freePMO: 'src/e2e/free-tickets/*pick-my-own.qa.e2e.ts',
	},

	jsonReporter: {
		stdout: false,
		outputFile: 'test-results/protractor-json-results.json'
	},

	bambooReporter: {
		filename: 'test-results/protractor-bamboo-reporter.json'
	},

	/*
		 * test results reporter to use
		 *
		 * possible values: 'dots', 'progress'
		 * available reporters: https://npmjs.org/browse/keyword/karma-reporter
		 */
		/*reporters: [ 'mocha', 'coverage', 'remap-coverage', 'json', 'bamboo', 'jasmine' ],*/

	beforeLaunch: function () {
		//clean up any residual/leftover from a previous run. Ensure we have clean 
		//files for both locking and merging. 
		if (fs.existsSync('jasmine-results.json.lock')) {
		  fs.unlinkSync('jasmine-results.json.lock');
		}
		if (fs.existsSync('jasmine-results.json')) {
		  fs.unlink('jasmine-results.json');
		}
	},
	
	onPrepare: function() {
		jasmine.getEnv().addReporter(new JSONReporter({
			file: 'test-results/protractor-bamboo-results.json', // by default it writes to jasmine.json 
			beautify: true,
			indentationLevel: 4 // used if beautify === true 
		}));
	}
};
