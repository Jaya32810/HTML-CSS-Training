import java.util.Scanner;
public class Main
{
	public static void main(String[] args) {
	    Scanner sc=new Scanner(System.in);
	    int size=sc.nextInt();
	    int[] arr={1,7,8,20,12};
	    int sum=0;
	    for(int i=0;i<arr.length;i++)
	    {
	        sum=sum+arr[i];
	
	    }
	    	System.out.print("Sum:" +sum);
	}
}