package it;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class ConsoleInput {
	private BufferedReader br;

	public ConsoleInput() {
		br = new BufferedReader(new InputStreamReader(System.in));
	}

	public Integer readInt() {
		int val;
		try {
			val = Integer.parseInt(br.readLine());
			return new Integer(val);
		} catch (IOException e) {
			return null;
		}
	}

	public String readLine() {
		try {
			return br.readLine();
		} catch (IOException e) {
			return null;
		}
	}

	public Float readFloat() {
		float val;
		try {
			val = Float.parseFloat(br.readLine());
			return new Float(val);
		} catch (IOException e) {
			return null;
		}
	}

	public Double readDouble() {
		double val;
		try {
			val = Double.parseDouble(br.readLine());
			return new Double(val);
		} catch (IOException e) {
			return null;
		}
	}

	public LocalDate readDate() {
		LocalDate data = LocalDate.of(1900, 1, 1);
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d/MM/yyyy");
		String buffer;
		try {
			buffer = br.readLine();
		} catch (IOException e) {
			return data;
		}
		if (buffer.equals("")) {
			return data;
		} else {
			return LocalDate.parse(buffer, formatter);
		}
	}
}
