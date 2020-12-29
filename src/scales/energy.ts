import {scale} from "../scale";

import {joule} from "./SI";
import {scaleSystemNameSymbol} from "../symbols";

export {joule}



/**
 * @summary 1 eV = 1.602176634×10−19 J
 * @description <b>Electronvolt</b> is the amount of kinetic energy gained by a single electron accelerating from rest through an electric potential difference of one volt in vacuum. When used as a unit of energy, the numerical value of 1 eV in joules (symbol J) is equivalent to the numerical value of the charge of an electron in coulombs (symbol C). Under the 2019 redefinition of the SI base units, this sets 1 eV equal to the exact value 1.602176634×10−19 J.
 * @link https://en.wikipedia.org/wiki/Electronvolt
 */
export const electronVolt = scale('Electronvolt', 'eV', 'electron-volt', 'electron volt', 1.602176634e-19, joule);

/**
 * @summary 1 meV = 0.001 eV
 * @description <b>Millielectronvolt</b> is 1/1000 eV.
 * @link https://en.wikipedia.org/wiki/Electronvolt
 */
export const milliElectronVolt = scale('Millielectronvolt', 'meV', 1/1000, electronVolt);

/**
 * @summary 1 keV = 1000 eV
 * @description <b>Kiloelectronvolt</b> is 1000 eV.
 * @link https://en.wikipedia.org/wiki/Electronvolt
 */
export const kiloElectronVolt = scale('Kiloelectronvolt', 'keV', 1000, electronVolt);

/**
 * @summary 1 MeV = 1000 keV
 * @description <b>Megaelectronvolt</b> is 1000 keV.
 * @link https://en.wikipedia.org/wiki/Electronvolt
 */
export const megaElectronVolt = scale('Megaelectronvolt', 'MeV', 1000, kiloElectronVolt);

/**
 * @summary 1 GeV = 1000 MeV
 * @description <b>Gigaelectronvolt</b> is 1000 MeV.
 * @link https://en.wikipedia.org/wiki/Electronvolt
 */
export const gigaElectronVolt = scale('Gigaelectronvolt', 'GeV', 1000, megaElectronVolt);

/**
 * @summary 1 TeV = 1000 MeV
 * @description <b>Teraelectronvolt</b> is 1000 GeV.
 * @link https://en.wikipedia.org/wiki/Electronvolt
 */
export const teraElectronVolt = scale('Teraelectronvolt', 'TeV', 1000, gigaElectronVolt);

/**
 * @summary 1 PeV = 1000 TeV
 * @description <b>Petaelectronvolt</b> is 1000 TeV.
 * @link https://en.wikipedia.org/wiki/Electronvolt
 */
export const petaElectronVolt = scale('Petaelectronvolt', 'PeV', 1000, teraElectronVolt);


/**
 * @summary 1 PeV = 1000 TeV
 * @description <b>Kilowatt-hour</b> is 1000 TeV.
 * @link https://en.wikipedia.org/wiki/Kilowatt-hour
 */
export const kiloWattHour = scale('Kilowatt-hour', 'kWh', 'kW h', 1000, teraElectronVolt);



export const ENERGY_UNITS = {
  joule,
  milliElectronVolt,
  electronVolt,
  kiloElectronVolt,
  megaElectronVolt,
  gigaElectronVolt,
  teraElectronVolt,
  petaElectronVolt,
  kiloWattHour,

  [scaleSystemNameSymbol]: 'Enegry units',
}

export default ENERGY_UNITS;
