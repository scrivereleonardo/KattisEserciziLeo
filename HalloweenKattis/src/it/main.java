package it;
import it.ConsoleInput;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	ConsoleInput consoleInput = new ConsoleInput();
		
		
		System.out.println("Scrivi il Mese, e il giorno e scopri se è halloween \n Mesi:JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC");
		String key=consoleInput.readLine();
		key.toUpperCase();
		
		if(key.equals("OCT 31") ||key.equals ("OCT31")) {
			System.out.println("yup");
			
		}
		else {
			System.out.println("nope");
		}
		
	}

}
