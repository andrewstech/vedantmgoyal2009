package java_programs.for_loop.series.pdf;
import java.util.Scanner;
//BB. 1,(1+2),(1+2+3),(1+2+3+4),........................N
public class bb_SeriesX {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter no. of terms : ");
        int n=sc.nextInt(),s=0;
        for (int i=1;i<=n;i++,s=0) {
            for(int c=1;c<=i;c++)
                s+=c;
            System.out.print(s+" ");
        }
        sc.close();
    }
}