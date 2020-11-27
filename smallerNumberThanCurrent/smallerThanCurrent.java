class Solution {
  public int[] smallerNumbersThanCurrent(int[] nums) {
      int size = nums.length;
      int[] arr = new int[size];

      for (var i = 0; i < nums.length; i++) {
          int smaller = 0;
          int left = i;
          int right = i;
          // check left values
          while (left >= 0) {
              if(nums[left] < nums[i]) {
                  smaller++;
              }
              left--;
          }
          // check right values
          while (right < nums.length) {
              if (nums[right] < nums[i]) {
                  smaller++;
              }
              right++;
          }
          arr[i] = smaller;
      }
      return arr;
  }
}