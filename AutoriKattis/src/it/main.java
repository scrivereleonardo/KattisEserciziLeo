package it;
import it.ConsoleInput;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
		ConsoleInput consoleInput = new ConsoleInput();
		
		
		System.out.println("Metti l'input dei nomi seguiti da un '-' , le prime lettere devono essere maiuscole");
		String[] key=consoleInput.readLine().split("-");
		
		for(int i = 0; i < key.length; i++)
			System.out.print(key[i].charAt(0));
		
		
	}

}
