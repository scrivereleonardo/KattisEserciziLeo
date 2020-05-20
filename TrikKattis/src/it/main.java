package it;

import it.ConsoleInput;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ConsoleInput consoleInput = new ConsoleInput();
		
		System.out.println("Inserisci i movimenti A,B,C. ");
		String key=consoleInput.readLine();
		key.toUpperCase();
		
		int counter=1;
		
		for (int i = 0; i < key.length(); i++)
		{
	
	    	
	    if (key.charAt(i) == 'A') {
	    	if(counter ==1)
	        counter =counter+1;
	    	
	    	else if(counter ==2)
	    		counter=counter-1;
	    
	    }

	    if (key.charAt(i) == 'B') {
	    	if(counter ==2)
	        counter =counter+1;
	    	
	    	else if(counter ==3)
	    		counter=counter-1;
	    
	    }
	    
	    if (key.charAt(i) == 'C') {
	    	if(counter ==1)
	        counter =counter+2;
	    	
	    	else if(counter ==3)
	    		counter=counter-2;
	    
	    }
	    
		}

	System.out.println(counter);

	
	    }
		
	}


