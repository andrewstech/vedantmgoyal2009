package java_programs.patterns;
/*  *
    * *
    * * *
    * * * *
*/
import java.util.Scanner;
public class NRTstar {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter no. of lines to print : ");
        int lines=sc.nextInt();
        for(int i=1;i<=lines;i++) {
            for(int j=1;j<=i;j++)
                System.out.print("* ");
            System.out.println();
        }
        sc.close();
    }
}
